import { useMemo, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import register from 'preact-custom-element';

const userList = [
  { name: 'yukihanalamy', label: '雪花ラミィ' },
  { name: 'momosuzunene', label: '桃鈴ねね' },
  { name: 'shishirobotan', label: '獅白ぼたん' },
  { name: 'omarupolka', label: '尾丸ポルカ' },
];
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const getRandomUserName = () => userList[getRandomInt(userList.length)].name;

const QueryGenerator = () => {
  const [q, setQ] = useState('');
  const [user, setUser] = useState(getRandomUserName);
  const href = useMemo(() => {
    const params = `${q} (from:${user})`;
    const encodedParams = encodeURIComponent(params);
    return `https://twitter.com/search?lang=ja&q=${encodedParams}`;
  }, [q, user]);

  return html`
    <div>
      <input type="text" value="${q}" onChange="${(e) => setQ(e.target.value)}" />
      <select value=${user} onChange="${(e) => setUser(e.target.value)}">
        ${userList.map(user => html`
          <option value="${user.name}">${user.label}</option>
        `)}
      </select>
    </div>
    <div>
      <a href="${href}">Twitter</a>
    </div>
  `;
};

register(QueryGenerator, 'x-query-generator', [], { shadow: true });
