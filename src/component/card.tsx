import { type userType } from "./user";
import { ToggleButton } from "./button";

type ProfileCardProps = {
  user: userType;
  isShowing: number | null;
  onToggle: (id: number) => void;
  isDarkMode: boolean;
};
export const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div
      className={`p-4 sm:p-6 w-full rounded-md shadow-md 
      flex flex-col sm:flex-row 
      items-center sm:items-start 
      gap-6 sm:gap-10 
      ${
        props.isDarkMode
          ? "bg-gray-800 shadow-gray-500"
          : "bg-blue-400 shadow-blue-800"
      }`}
    >
      {/* Avatar */}
      <div
        className="
    w-full flex justify-center
    sm:w-auto sm:block
    sm:border-r sm:pr-6 mb-3 sm:mb-0
    border-transparent
  "
      >
        <div
          className={`
      p-1 rounded-full
      ${
        props.isDarkMode
          ? "bg-gray-700 shadow-gray-900/50"
          : "bg-blue-200 shadow-blue-900/40"
      }
      shadow-md
    `}
        >
          <img
            src={`https://i.pravatar.cc/150?img=${props.user.id}`}
            alt={props.user.name}
            className="
        w-20 h-20
        sm:w-24 sm:h-24
        rounded-full transition-transform duration-200 active:scale-95 object-cover
      "
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full text-sm sm:text-base 
        ${props.isDarkMode ? "text-amber-50" : "text-blue-950"}
        font-semibold space-y-1 break-words`}
      >
        <p>
          <span className="uppercase text-xs">Username:</span>{" "}
          {props.user.username}
        </p>

        <p>
          <span className="uppercase text-xs">Fullname:</span> {props.user.name}
        </p>

        <p className="truncate sm:whitespace-normal">
          <span className="uppercase text-xs">Email:</span> {props.user.email}
        </p>

        <p>
          <span className="uppercase text-xs">Address:</span>{" "}
          {props.user.address.street}, {props.user.address.city}
        </p>

        <p>
          <span className="uppercase text-xs">Geo:</span>{" "}
          {props.user.address.geo.lat}, {props.user.address.geo.lng}
        </p>

        <p>
          <span className="uppercase text-xs">Company:</span>{" "}
          {props.user.company.name}
        </p>

        <p className="truncate sm:whitespace-normal">
          <span className="uppercase text-xs">Catch Phrase:</span>{" "}
          {props.user.company.catchPhrase}
        </p>

        {props.isShowing === props.user.id && (
          <>
            <p>
              <span className="uppercase text-xs">Website:</span>{" "}
              {props.user.website}
            </p>

            <p>
              <span className="uppercase text-xs">Phone:</span>{" "}
              {props.user.phone}
            </p>
          </>
        )}

        <div className="pt-3">
          <ToggleButton
            user={props.user}
            isShowing={props.isShowing}
            onToggle={props.onToggle}
            isDarkMode={props.isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};
