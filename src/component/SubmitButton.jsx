import { useFormStatus } from "react-dom";

function SubmitButton({
  variant = "warning", // We'll translate this manually to a Tailwind color
  className = "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded mt-3",
  text = "Submit Quote",
  loadingText = "Submitting Please Wait ...",
  spinner = true,
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${className} ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
      disabled={pending}
    >
      {pending ? "submitting...." : text}
    </button>
  );
}

export default SubmitButton;
