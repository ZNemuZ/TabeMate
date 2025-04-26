import { LayoutOpenProps } from '../../types/LayoutOpenProps';

const SideBar = ({ isOpen }: LayoutOpenProps) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-[200px] bg-gray-800 text-white p-4 h-screen transform transition-all duration-500 ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-40 ease-in-out'
        }`}
      >
        <ul className="space-y-5 mt-10">
          <li>
            <a href="/foods" className="block hover:text-blue-300 ">
              食材一覧
            </a>
          </li>
          <li>
            <a href="/add" className="block hover:text-blue-300">
              食材詳細
            </a>
          </li>
          <li>
            <a href="/logout" className="block hover:text-blue-300">
              ログアウト
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
