// The K with the red dot. Set in Archivo like the rest of the site; app/icon.svg is the same mark drawn for the browser tab.
export default function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      K<span className="mark-dot" />
    </span>
  );
}
