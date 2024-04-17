import { BsCloudDownloadFill } from "react-icons/bs";

const Modal = () => {
  return (
    <div>
      <button
        className="btn btn-outline btn-secondary text-black normal-case"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Resume
        <BsCloudDownloadFill className="w-5 h-5 ml-2 text-seconadry"></BsCloudDownloadFill>
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
