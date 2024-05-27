import Link from "next/link";

export default function Nav() {
  return (
    <ul className="mt-3">
      <li className="my-1">
        <Link className="hover:bg-gray-500 text-white" href="/">
          Home
        </Link>
      </li>

      <li className="my-1">
        <Link className="hover:bg-gray-500 text-white" href="/products">
          Produtos
        </Link>
      </li>

      <li className="my-1">
        <Link className="hover:bg-gray-500 text-white" href="/products/create">
          Criar Produtos
        </Link>
      </li>
    </ul>
  );
}
