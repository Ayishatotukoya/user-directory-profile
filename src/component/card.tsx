import { type userType } from "./user"; 
import { ToggleButton } from "./button"; 



type ProfileCardProps = {
  user: userType;
  isShowing: number | null;
  onToggle:  (id: number) => void;
  isDarkMode:boolean;
};

 const ProfileCard = (props:ProfileCardProps) => {



  return (
    <div
      className={`p-6 w-full rounded-md  shadow-md flex items-center gap-10 justify-center  ${
        props.isDarkMode
          ? "bg-gray-800  shadow-gray-500"
          : " bg-blue-400 shadow-blue-800"
      }`}
    >
      <div
        className={`${
          props.isDarkMode ? "border-gray-900" : "border-blue-900"
        } border-r  pr-6`}
      >
        <img
          src={`https://i.pravatar.cc/150?img=${props.user.id}`}
          alt={props.user.name}
          className="w-24 h-24 rounded-full mb-4"
        />
      </div>


      <div
        className={`${props.isDarkMode ? "text-amber-50" : "text-blue-950"} text-xl font-extrabold`}
      >
        <h3>
          <span className="font-semibold  text-sm uppercase">Username :</span>
          {props.user.username}
        </h3>
        <h2>
          <span className="font-semibold  text-sm uppercase">Fullname :</span>
          {props.user.name}
        </h2>
        <p>
          <span className="font-semibold  text-sm uppercase"> Email :</span>
          {props.user.email}
        </p>
        <p>
          <span className="font-semibold  text-sm uppercase"> Address :</span>
          {props.user.address.street}, {props.user.address.suite},
          {props.user.address.city},{props.user.address.zipcode}
        </p>
        <p>
          <span className="font-semibold  text-sm uppercase"> Geo :</span> Lat
          {props.user.address.geo.lat}, Lng {props.user.address.geo.lng}
        </p>
        <p>
          <span className="font-semibold  text-sm uppercase">Company :</span>
          {props.user.company.name}
        </p>
        <p>
          <span className="font-semibold  text-sm uppercase">Catch Phrase :</span>
          {props.user.company.catchPhrase}
        </p>
        <p>
          <span className="font-semibold  text-sm uppercase">BS :</span>
          {props.user.company.bs}
        </p>

        {props.isShowing === props.user.id
          ? [
              <p>
                <span className="font-semibold  text-sm uppercase">Website :</span>
                {props.user.website}
              </p>,

              <div>
                <p>
                  <span className="font-semibold  text-sm uppercase">Phone :</span>
                  {props.user.phone}
                </p>
              </div>,
            ]
          : null}
        <ToggleButton
          user={props.user}
          isShowing={props.isShowing}
          onToggle={props.onToggle}
          isDarkMode={props.isDarkMode}
        />
      </div>
    </div>
  );
};


export { ProfileCard }