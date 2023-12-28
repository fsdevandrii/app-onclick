import { Fragment } from "react";
import "./App.css";

function App() {
  const list = [
    { id: 1, text: "Перший елемент", link: "/first" },
    { id: 2, text: "Другий елемент", link: "/second" },
    { id: 3, text: "Третій елемент", link: "/last" },
  ];

  const handleLinkClick = () => {
    return window.confirm("Вийти?");
  };

  return (
    <div className="App">
      <header className="App-header">
        {list.map((item) => (
          <Fragment key={item.id}>
            <Link {...item} />
          </Fragment>
        ))}

        <Link
          text="My link"
          link="www.gogle.com"
          getConfirm={handleLinkClick}
        />

        <Input />
      </header>
    </div>
  );
}

function Link({ text, link, getConfirm }) {
  const handleClick = (e) => {
    console.log(e.target);

    const result = getConfirm();

    if (result) {
      window.location.assign(link);
    }
  };

  return (
    <span className="App-link" onClick={handleClick}>
      {text}
    </span>
  );
}

function Input() {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return <Input onChange={handleInput} />;
}

export default App;
