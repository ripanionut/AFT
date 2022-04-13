import { useState } from 'react';
import Card from '../components/card';
import { getData } from '../utils/fetchData';

const Home = (props) => {
  const [posts, setPosts] = useState(props.posts);
  return (
    <div>
      <div className="flex items-center justify-center pt-4 w-100">
        <div className="flex border-2 border-gray-200 rounded ">
          <input
            type="text"
            className="px-4 py-2 w-60"
            placeholder={`Total: ${props.result} Studenti`}
          />
          <button className="px-4 text-white bg-gray-600 border-l ">Cauta</button>
        </div>
      </div>
      <div className="p-7 pt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {posts.map((sd) => (
          <Card Item key={sd._id} sd={sd} />
        ))}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await getData('post');
  return {
    props: {
      posts: res.posts,
      result: res.result
    } 
  };
}

export default Home;
