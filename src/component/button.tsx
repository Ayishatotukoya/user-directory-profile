import type { userType } from "./user"; 

type ToggleButtonProps = {
  user: userType;
  isShowing: number | null;
  onToggle: (id: number) => void;
  isDarkMode:boolean
};

 const ToggleButton = (props: ToggleButtonProps) => {

  return (
    <button
                type="button"
                className=" p-1 rounded-sm mt-2 font-semibold text-sm text-neutral-300 hover:text-gray-700 transition-colors duration-300 shadow-neutral-500 shadow-sm"
                onClick={() => props.onToggle(props.user.id)}
              >
                View {props.isShowing === props.user.id ? "less " : "more "}
              </button>
  );
};


export { ToggleButton }; 