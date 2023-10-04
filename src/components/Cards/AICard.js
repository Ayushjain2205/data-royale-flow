const AICard = ({
  title,
  image,
  description,
  id,
  type,
  component: Component,
}) => {
  const modalId = `AI-ability-${id}`;
  return (
    <div
      className="flex flex-row rounded-xl bg-white p-4 ring ring-indigo-50 h-[200px] w-[500px] cursor-pointer hover:bg-[#B8B8FF30]"
      onClick={() => document.getElementById(modalId).showModal()}
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-row items-center gap-[20px]">
          <img src={image} className="h-[75px]" alt={title} />
          <p className="text-[36px]">{title}</p>
        </div>
        <p className="opacity-50">{description}</p>
      </div>

      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-[20px]">{title}</h3>
          <Component type={type} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AICard;
