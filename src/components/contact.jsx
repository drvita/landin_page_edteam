import Icon from "react-hero-icon";

function ContactComponent(props) {
  const {type, value} = props;
  const icontype = (typeString) => {
    switch (typeString) {
        case "email":
            return <Icon icon="mail" type="solid" className="inline mr-2" />
        default:
            return <Icon icon="phone" type="solid" className="inline mr-2" />;
    }
  };
  const accion = (type, value) => {
    console.log("[DEBUG] accion", type, value);
    switch (type) {
        case "email":
            window.open(`mailto:${value}`,'_blank');
            break;
        default:
            window.open(`tel:${value}`,'_blank');
            break;
    }
  };

  return (
    <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase my-2"
        onClick={e => accion(type, value)}
    >
        {icontype(type)}
        {type}
    </button>
  );
}

export default ContactComponent;
