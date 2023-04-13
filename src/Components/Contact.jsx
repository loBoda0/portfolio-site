import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form
        action="https://getform.io/f/58a2d40a-7c8c-401b-a50f-bfd7cb15f448"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-purple-500">
            Contact
          </h1>
          <p className="text-gray-500 py-4">
            // Submit the form below or shoot me an email -
            martin.loboda02@gmail.com
          </p>
        </div>
        <input
          className="border-2 border-black p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border-2 border-black my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="border-2 border-black p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <div className="">
          <button className="border-2 border-black px-6 py-2 my-2 items-center hover:bg-black hover:text-white transition hover:ease-in">
            Let's Collaborate
          </button>
        </div>
      </form>
      {/* <div className="h-screen flex justify-center items-center flex-col mx-auto px-6 bg-gray-400">
        <div className="max-w-5xl">
          <p className="">Contact</p>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
