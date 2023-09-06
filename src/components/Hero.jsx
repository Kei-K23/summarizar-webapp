const Hero = () => {
  return (
    <div className="text-black mt-10">
      <h1 className="text-center text-4xl font-mono font-bold mb-4">
        Unlock the Power of{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-700">
          Summarization
        </span>
      </h1>
      <h2 className="text-center text-3xl font-mono font-bold mb-8">
        Get Concise, Informative Summaries Instantly
      </h2>
      <p className="text-xl text-slate-900 w-full lg:max-w-[1000px] text-center m-auto">
        Are you tired of sifting through lengthy articles and documents to find
        the information you need? Welcome to the future of information
        consumption. Our cutting-edge summarization technology simplifies
        complex content into bite-sized summaries, saving you time and helping
        you stay informed. Whether you're a student, professional, or just a
        curious reader, our tool is your key to efficient knowledge acquisition.
      </p>
    </div>
  );
};

export default Hero;
