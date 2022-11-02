import React from "react";
import { useStateValue } from "../components/StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // Mock the API CALL
  // const data = Response;

  // console.log(data);

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="search-page__logo"
          />
        </Link>
        <div className="searchPage__header--body">
          <Search hideButtons />

          <div className="search-page__options">
            <div className="search-page__options--left">
              <div className="search-page__option">
                <SearchIcon />
                <Link to="/aa">All</Link>
              </div>

              <div className="search-page__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="search-page__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="search-page__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="search-page__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="search-page__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="search-page__options--right">
              <div className="search-page__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="search-page__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search-page__results">
          <p className="search-page__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}{" "}
          </p>

          {data?.items.map((item, index) => (
            <div className="search-page__result" key={index}>
              <a className="search-page__result--link" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src
                && ( <img className="searchPage__result--image" src={item.pagemap?.cse_image[0]?.src} /> )}
                {item.displayLink} ▽
              </a>
              <a href={ item.link } className="search-page__result--title">
                <h2>{ item.title }</h2>
              </a>
              <p className="search-page__result--snippet"> { item.snippet } </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
