
function Header(props) {
  document.title = props.docTitle;
  
  return (
    <div className="bg-blue-300">
      <nav>
        <div className=" container mx-auto px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="index.html">
            {props.docTitle}
          </a>
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li>
                <a className="px-4 font-bold hover:text-yellow-200" href="index.html">Home</a>
              </li>
              <li>
                <a className="px-4 hover:text-yellow-200" href="#">Content</a>
              </li>
              <li>
                <a className="px-4 hover:text-yellow-200" href="#">Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
