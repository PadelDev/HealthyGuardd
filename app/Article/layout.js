import ArticlesPage from "../components/Article";

export default function ArticleLayout({ children }) {
    return (
      <div>
        <header>
          <h1></h1>
        </header>

        <div>
        <ArticlesPage/>
        </div>

        <main>{children}</main>
      </div>
    );
  }
  