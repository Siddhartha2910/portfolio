import './loader.css'

function Loader() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-#0f1418 animate-fadeOut">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
