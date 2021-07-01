import Icon from "react-hero-icon";

function navBarComponent() {
  return (
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Icon icon="menu" type="solid" />
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <span className="px-2 py-1 font-bold text-gray-600 bg-white rounded-full">LP</span>
        </div>
      </div>
      
    </div>
  </div>

</nav>

  );
}

export default navBarComponent;
