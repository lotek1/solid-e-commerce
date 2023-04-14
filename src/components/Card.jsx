export default function Card(props) {
  return (
    <div
      class="bg-neutral-100 p-4 text-center rounded-md shadow-md skew-y-3"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      <div class="transform -skew-y-3">{props.children}</div>
    </div>
  );
}
