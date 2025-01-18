import '@/styles/components/homework.css';

function Homework() {
  return (
    <div className="homework">
      <header>
        <h1 lang="en">Custom Vite Template</h1>
      </header>
      <main>
        <p>야무쌤, 점심 아이스브레이킹 5분은 너무 짧아요.</p>
        <p>2분만 더 늘려주시면 안 돼요? 🥹</p>
      </main>
      <footer>
        <small lang="en">© {new Date().getFullYear()} EUID. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Homework;
