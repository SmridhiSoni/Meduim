import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const Write = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('art');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('category', category);
    formData.append('body', body);
    formData.append('image', image);
    formData.append('createdUser', username);

    axios
      .post('http://localhost:3001/write', formData)
      .then((response) => {
        console.log('Post created successfully');
        setTitle('');
        setSubtitle('');
        setCategory('art');
        setBody('');
        setImage(null);
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#F6F8FA',
    borderRadius: '4px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };
  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  const labelStyle = {
    marginBottom: '10px',
    display: 'block',
  };

  const inputStyle = {
    marginTop: '5px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #E4E7EB',
    width: '100%',
  };

  const selectStyle = {
    marginTop: '5px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #E4E7EB',
    width: '100%',
  };

  const textareaStyle = {
    marginTop: '5px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #E4E7EB',
    width: '100%',
    minHeight: '100px',
  };
  const fileInputStyle = {
    marginTop: '5px',
    display: 'inline-block',
    backgroundColor: '#1DA1F2',
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '10px 20px',
  };
  const fileInputLabelStyle = {
    marginLeft: '10px',
  };

  const fileInputText = {
    color: '#FFF',
    fontWeight: 'bold',
  };
  const handleFileInputChange = (e) => {
    // Logic to handle file input change
    const selectedFile = e.target.files[0];
    // ...
  };

  // const fileInputStyle = {
  //   marginTop: '5px',
  // };

  // const buttonStyle = {
  //   marginTop: '10px',
  //   padding: '10px 20px',
  //   backgroundColor: '#1DA1F2',
  //   color: '#FFF',
  //   border: 'none',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  //   fontWeight: 'bold',
  //   letterSpacing: '0.5px',
  //   textTransform: 'uppercase',
  //   transition: 'background-color 0.3s',
  // };

  // const buttonHoverStyle = {
  //   backgroundColor: '#0D86D8',
  // };
  // const buttonCombinedStyle = {
  //   ...buttonStyle,
  //   ...buttonHoverStyle,
  // };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="title" style={labelStyle}>
        Title:
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
      </label>

      <label htmlFor="subtitle" style={labelStyle}>
        Subtitle:
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
          style={inputStyle}
        />
      </label>

      <label htmlFor="category" style={labelStyle}>
        Category:
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
          <option value="art">Art</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="movie">Movie</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
        </select>
      </label>

      <label htmlFor="body" style={labelStyle}>
        Body:
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={textareaStyle}
        ></textarea>
      </label>

      {/* <label htmlFor="image" style={labelStyle}>
        Image:
        <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} style={fileInputStyle} />
      </label> */}

      <label htmlFor="image" style={labelStyle}>
        Image: 
        <input
          type="file"
          id="image"
          onChange={handleFileInputChange}
          style={fileInputStyle}
        />
        <span style={fileInputLabelStyle}>
          {image ? <span style={fileInputText}>{image.name}</span> : ''}
        </span>
      </label>

  
      <button type="submit" style={buttonStyle}>
        Publish
      </button>
    </form>
  );
};

export default Write;

