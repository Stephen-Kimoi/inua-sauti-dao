import NoImage from "../assets/images/noImage.png";

const SinglePost = () => {
  return (
    <main className="min-h-screen bg-section">
      <section className="container mx-auto bg-white">
        <section className="flex flex-col-reverse md:flex-row">
          <article className="w-full md:w-5/12 p-2 md:p-5">
            <img
              className="w-full h-[30vh] md:h-[70vh] object-cover "
              src={NoImage}
              alt="data"
            />
          </article>
          <article className="w-full md:w-7/12 p-2 md:p-5">
            <h1 className="text-xl md:text-3xl font-bold text-gray-400 text-center md:text-left  md:pb-5">
              Forms 34A in kibera and kondele were not signed by Uda agents, you
              can download them on the Iebc portal and confirm
            </h1>
            <article className="w-full md:w-8/12 py-3 flex justify-between">
              <div>
                <span className="text-sm font-medium">Date</span>
              </div>
              <div className="font-medium text-gray-500 text-sm">
                via Twitter
              </div>
            </article>
            <p className=" text-gray-700 py-5 text-center md:text-left text-base md:w-[90%]">
              Forms 34A in kibera and kondele were not signed by Uda agents, you
              can download them on the Iebc portal and confirm
            </p>
            <hr />
            <article className="py-5">
              <h3 className="font-semibold text-gray-700 text-sm">
                Incident date
              </h3>
              <div>
                <span className="text-sm text-gray-500 font-medium">Date</span>
              </div>
            </article>
            <hr />
            <article className="py-5">
              <h3 className="font-semibold text-gray-700 text-sm">
                Source link
              </h3>
              <div>
                <span className="text-sm text-gray-500 font-medium">link</span>
              </div>
            </article>
            <hr />
            <hr />
            <article className="py-5">
              <h3 className="font-semibold text-gray-700 text-sm">
                Location of the incident
              </h3>
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  location
                </span>
              </div>
            </article>
            <hr />
          </article>
        </section>
        <article className="p-2 md:p-5 ">
          <h1 className=" text-gray-500 mb-4 font-bold text-xl">Your vote</h1>
          <div className="flex flex-col md:flex-row bg-section ">
            <div className="w-full md:w-5/12 p-5 flex  justify-between">
              <div>
                <button className="bg-button text-white font-medium px-5 py-2 w-fit">
                  Vote for
                </button>
              </div>
              <div>
                <button className=" bg-orange-400 text-white font-medium px-3 py-2 w-fit">
                  Vote against
                </button>
              </div>
            </div>
            <div className="w-full md:w-7/12 p-5 ">
              <form className="flex flex-col">
                <h3 className=" text-gray-400 mb-4 font-bold">
                  Leave comment(Optional)
                </h3>
                <textarea
                  className="bg-white outline-none p-2"
                  type="text"
                  rows={4}
                ></textarea>
                <div className="mt-3 self-end">
                  <button className="bg-button text-white font-medium px-3 py-2 w-fit">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SinglePost;