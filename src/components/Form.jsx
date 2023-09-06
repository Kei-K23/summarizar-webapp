import { useEffect, useState } from "react";
import { useLazyGetSummaryOfArticleQuery } from "../services/article";

const Form = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
    createdAt: "",
  });
  const [allArticle, setAllArticle] = useState([]);
  const [copy, setCopy] = useState(Array(allArticle).fill(false));
  const [copyBtn, setCopyBtn] = useState(false);
  const [getSummaryOfArticle, { error, isFetching }] =
    useLazyGetSummaryOfArticleQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    // if localStorage have some articles data then put to setAllArticle state
    if (articlesFromLocalStorage) {
      setAllArticle(articlesFromLocalStorage);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // if article is already exist in localStorage then return that data
    const existingArticle = allArticle.find((item) => item.url === article.url);
    if (existingArticle) return setArticle(existingArticle);

    // get fetch data from RTK
    const { data } = await getSummaryOfArticle({
      articleURL: article.url,
    });

    // if fetch data have summary then at to localStorage
    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
        createdAt: crypto.randomUUID(),
      };

      const updateAllArticles = [...allArticle, newArticle];
      // add state
      setAllArticle(updateAllArticles);
      setArticle(newArticle);
      // update localStorage
      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    handleFormSubmit(e);
  };

  const handleCopyClip = (copyText, index) => {
    navigator.clipboard.writeText(copyText).then(() => {
      const newCopy = [...copy];
      newCopy[index] = true;
      setCopy(newCopy);
      setTimeout(() => setCopy(false), 3000);
    });
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="text-xl flex justify-center items-center w-full lg:w-3/5 xl:w-3/6 2xl:w-2/5 h-10 rounded-2xl  px-4 text-black bg-slate-200 m-auto mt-10"
      >
        <label htmlFor="url">
          <i className="fa-solid fa-paperclip text-xl text-slate-700 "></i>
        </label>
        <input
          type="url"
          id="url"
          value={article.url}
          onChange={(e) =>
            setArticle({
              ...article,
              url: e.target.value,
            })
          }
          onKeyDown={handleKeyDown}
          placeholder="enter url"
          className="w-full h-full bg-transparent  px-3 text-slate-800 peer focus:outline-none"
          required
          aria-label="enter url"
          title="enter url"
        />
        <button
          aria-label="submit form"
          type="submit"
          className="border-2  py-1 px-2 peer-focus:border-slate-600"
          title="enter"
        >
          <i className="fa-solid fa-share"></i>
        </button>
      </form>

      <div className="w-5/6 lg:w-3/6 xl:w-3/6 2xl:w-2/6 flex justify-center items-center flex-col gap-4 mt-6 m-auto">
        {allArticle
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((article, index) => (
            <div
              key={index}
              className="bg-slate-200 w-full flex items-center py-1 px-4 rounded-xl cursor-pointer"
              onClick={() => setArticle(article)}
              title="see article"
            >
              <div
                onClick={() => handleCopyClip(article.url, index)}
                title="copy url"
              >
                {copy[index] ? (
                  <i className="fa-solid fa-check text-black text-xl mr-4"></i>
                ) : (
                  <i className="fa-regular fa-clipboard text-black text-xl mr-4"></i>
                )}
              </div>
              <p className="truncate text-slate-700">{article.url}</p>
            </div>
          ))}
      </div>

      {isFetching ? (
        <p className="text-center text-2xl  mt-20 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-700">
          <i className="fa-solid fa-spinner fa-spin text-2xl text-black"></i>{" "}
          Summarizing...
        </p>
      ) : error ? (
        <p className="text-center text-2xl text-slate-900 mt-20">
          There were some error{" "}
          <i className="fa-regular fa-face-sad-tear fa-fade text-slate-900"></i>
          <br />
          <span className="text-black text-xl text-center">
            {error.message}
          </span>
        </p>
      ) : article.summary ? (
        <div className="py-8 px-4 lg:px-16">
          <h2 className="text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-700">
            Summary Article
          </h2>
          <p className="text-xl text-slate-900 font-medium">
            {article.summary}
          </p>
          <button
            onClick={() => {
              setCopyBtn(true);
              navigator.clipboard.writeText(article.summary);
              setTimeout(() => {
                setCopyBtn(false);
              }, 3000);
            }}
            className="mt-6 text-black text-xl bg-slate-200 p-2 rounded-xl transition-all hover:bg-slate-300 active:bg-slate-400"
            title="copy article"
          >
            {copyBtn ? (
              <i className="fa-solid fa-check text-black text-xl mr-4 "></i>
            ) : (
              <i className="fa-regular fa-clipboard text-black text-xl mr-4"></i>
            )}
            {copyBtn ? "copied" : "copy article"}
          </button>
        </div>
      ) : (
        <p className="font-mono text-2xl text-slate-800 text-center mt-20">
          There is no article to summarize! Provide URL to summarize for you
        </p>
      )}
    </div>
  );
};

export default Form;
