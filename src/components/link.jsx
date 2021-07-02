import Icon from "react-hero-icon";

function LinkComponent(props) {
  const {title, url, description} = props;

  return (
    <article className="p-4 mx-1 mt-1 text-lg text-white bg-gray-800 border border-gray-500 rounded-lg shadow-lg">
      <div className="font-bold text-xl mb-2">
        <Icon icon="link" type="solid" className="inline mr-2" />
        <span className="inline">{title}</span>
      </div>
      <p className="text-base w-full truncate md:overflow-clip">{description}</p>
      <div className="mt-4 text-right">
      <a 
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="globe" type="solid" className="inline mr-2" />
        Go now
      </a>
      </div>
    </article>
  );
}

export default LinkComponent;
