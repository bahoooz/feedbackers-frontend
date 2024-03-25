import Navbar from "../../components/Navbar";


export default function Account() {
  return (
    <div
      id="account"
      className="bg-bg overflow-hidden sm:flex sm:justify-center"
    >
      <div className="w-[430px] sm:max-w-[430px]">
        <h1 className="text-center">Account</h1>

        <Navbar />
      </div>
    </div>
  );
}
