import ChatPage from "./page";
import ChatAI from "../components/ChatAI";

export default function ArticleLayout({ children }) {
    return (
      <div>
        <header>
          <h1></h1>
        </header>

        <div>
        <ChatAI/>
        </div>

        <main>{children}</main>
      </div>
    );
  }
  