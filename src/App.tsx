import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Post } from './components/Post/Post';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';
import { ApiRequests } from './api/api';
import { isError, useQuery } from 'react-query';
import { IPost } from './types/post';
import { useData } from './api/query';

function App() {
  const [formOpened, setFormOpened] = useState(false);
  const openForm = useCallback(() => setFormOpened(prev =>!prev), []);
  const { data, isFetching, isError } = useData();
  return (
    <div className="App">
      <header><h1 className='logo'>Blog</h1></header>
      <main>
      <section>
        <Button onClick={openForm} action='add'>Новый пост</Button>
        <Form opened={formOpened} />
      </section>
      <section>
        {data && data.map((item: IPost) => <Post key={item.id} post={item} />)}
        {!data?.length && !isFetching && !isError && <p>Пока ничего нет</p>}
        {isFetching && <p>Загружается...</p>}
        {isError && <p>Что-то пошло не так</p>}
      </section>
      </main>
    </div>
  );
}

export default App;
