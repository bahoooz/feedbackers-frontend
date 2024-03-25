import Link from "next/link";

export default function Menu() {
  const id = "jbl";
  return (
    <nav className="fixed border h-full w-80">
      <ul>
        <li>
          <Link href={`/admin/${id}/create-form`}>Créer un formulaire</Link>
        </li>
        <li>
          <Link href={`/admin/${id}/view-feedbacks`}>Voir mes feedbacks</Link>
        </li>
      </ul>
    </nav>
  );
}
