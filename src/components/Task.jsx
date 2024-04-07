import Stack from 'react-bootstrap/Stack';
import TaskItem from './TaskItem';
import ProgressBars from './ProgressBars';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function Task() {
    const [taskData, setData] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/e.csv');
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        
        const parsedData = Papa.parse(csv, { header: true, dynamicTyping: true }).data;
        setData(parsedData);

        // Calculate progress
        const completedTasks = parsedData.filter(item => item.Comp === 1).length;
        const totalTasks = parsedData.length;
        const calculatedProgress = Math.round((completedTasks / totalTasks) * 100);
        setProgress(calculatedProgress);
      };
  
      fetchData();
    }, []);

  return (
    <Stack gap={3}>
      <h2>Title</h2>
      <ProgressBars value= { progress } />
      <div className="">
      {taskData.map((item, index) => (
          <TaskItem key={index} title={item.Title} desc={item.Desc} comp={item.Comp} />
        ))}
      </div>
    </Stack>
  );
}

export default Task;