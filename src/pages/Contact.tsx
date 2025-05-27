export function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 size-full">

      <div
        className={
          "flex flex-col gap-9 max-w-4xl p-5 "
        }
      >
        <b className="text-2xl text-white">
          Besoin de me contacter ? Vous pouvez me rejoindre sur LinkedIn.
        </b>

        <div className="flex justify-center gap-16">
          <a
            href="https://www.linkedin.com/in/tristan-p-91158a1b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded border-2 border-white"
          >

            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
