import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Thiago Cordeiro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas, illo officia laudantium cum earum, impedit, aspernatur in sequi atque vel provident vitae tempore eius delectus optio iste consequuntur iusto?"
      />
      <Post 
        author="Elon Musk"
        content="Conteúdo legal"
      />
    </div>
  );
}
