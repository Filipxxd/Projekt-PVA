import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <header className="jumbotron">
        <div className="container">
          <h1 className="display-3">Kanabinoidy</h1>
          <p>látky vysktyující se ve všem živém</p>
        </div>
      </header>
      <main className="container">
        <main className="row">
          <secion className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              {/* <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a> */}
            </p>
          </secion>
          <section className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              {/* <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a> */}
            </p>
          </section>
        </main>
      </main>
    </>
  )}