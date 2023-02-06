export default function MessageBox() {
  return (
    <div className="flex space-x-3 p-4">
      <input
        className="flex-grow rounded-md border border-gray-3 px-4 py-1.5 placeholder:text-gray-1"
        type="text"
        placeholder="Type a new message"
      />
      <button className="rounded-md bg-blue-1 py-1.5 px-5 text-white">
        Send
      </button>
    </div>
  );
}
