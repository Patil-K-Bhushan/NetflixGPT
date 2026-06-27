import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import NetflixGPT from "../assets/NetflixGPT.png";
import { toogleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0">
      <img className="w-32 md:w-44" src={NetflixGPT} alt="logo" />
      {user && (
        <div className="flex flex-wrap items-center justify-center gap-2 p-2">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-3 md:px-4 text-sm md:text-base text-white bg-purple-600 rounded-lg whitespace-nowrap"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 md:w-12 md:h-12 object-cover rounded"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white text-sm md:text-base"
          >
            {"Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
