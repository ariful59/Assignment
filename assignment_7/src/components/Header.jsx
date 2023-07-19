
function Header({docTitle}) {
  
  return (
    <div className="flex flex-col mx-auto bg-blue-300 max-w-sm pt-10 pb-10 mb-4">
      <p className="text-center text-2xl"> {docTitle}</p>
    </div>
  );
}

export default Header;
