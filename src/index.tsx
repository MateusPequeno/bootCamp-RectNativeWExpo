import React, { useEffect,useState } from 'react';
import {View,StyleSheet,Text,StatusBar} from 'react-native';
// View, footer, header, main, aside, section
//Não possuem valor semantico (significado)
//Text para todo lugar que queremos texto
//Todos os componentes possuem por padrao "display: flex"
//Para evitar erros usar o fragment <> </>
//Axios para consumir dados da API, assim como WEB
import api from './services/api';
export function Home(){
  
  const [projects, setProjects]= useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  },[]);
return (
  <>
  <StatusBar barStyle = "light-content" backgroundColor = '#7159c1'/>
  <View style = {styles.container}>
<Text style = {styles.title}>
  Olá mundo
  {projects.map(projects => <Text key = {project.id}>{project.title}</Text>)}
</Text>
  </View>
  </>
);
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#7159c1',
    justifyContent :'center',
    alignItems : 'center',
  },
  title: {
    color : '#ffffff',
    fontSize: 32,
    fontWeight: 'bold'
  }
})