import { DASHBOARD_ROUTE } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const UserIcon = observer(() => {
  const { user } = useStore();
  return (
    <>
      {!user.isAuth ? (
        <NavLink to={DASHBOARD_ROUTE} className="text-sm/6 font-semibold hover:text-custom transition-colors">
          Log in <span aria-hidden="true">&rarr;</span>
        </NavLink>
      ) : (
        <NavLink to={DASHBOARD_ROUTE} className="text-sm/6 font-semibold">
          <UserCircleIcon width={25} height={25} className="hover:text-custom transition-colors"/>
        </NavLink>
      )}
    </>
  );
});

export default UserIcon;
