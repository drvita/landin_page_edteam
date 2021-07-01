import Icon from "react-hero-icon";

function LinkComponent() {
  return (
    <article className="p-4 mx-1 mt-1 text-lg text-white bg-gray-800 border border-gray-500 rounded-lg shadow-lg hover:bg-blue-900">
      <div class="font-bold text-xl mb-2">
        <Icon icon="link" type="solid" className="inline mr-2" />
        <span className="inline">Titulo</span>
      </div>
      <p class="text-base w-full truncate md:overflow-clip">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </article>
  );
}

export default LinkComponent;
