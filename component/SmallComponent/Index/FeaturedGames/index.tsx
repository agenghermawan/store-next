import React from "react";
import FuturedGamesitem from "./FeaturedGamesItem";

export default function FeaturedGames() {
  return (
    <div>
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <FuturedGamesitem
              title="Super Mechs"
              category="Mobile"
              image="Thumbnail-1"
              link="/detail"
            />
            <FuturedGamesitem
              title="Call of Duty: Modern"
              category="Mobile"
              image="Thumbnail-2"
              link="/detail"
            />
            <FuturedGamesitem
              title="Mobile Legend"
              category="Mobile"
              image="Thumbnail-3"
              link="/detail"
            />
            <FuturedGamesitem
              title="Clash of Clans"
              category="Mobile"
              image="Thumbnail-4"
              link="/detail"
            />
            <FuturedGamesitem
              title="Valorant"
              category="Desktop"
              image="Thumbnail-5"
              link="/detail"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
