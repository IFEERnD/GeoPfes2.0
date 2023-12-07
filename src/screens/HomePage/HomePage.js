import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import AllScreens from '../../navigation/AllScreens';
import dimension from '../../constant/dimension';
import colors from '../../constant/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchUI from '../../component/SearchUI';
import {EmptyList} from '../../component/FlatListUI';
import StatusBarCustom from '../../component/StatusBarCustom';

const MARGIN_VER = dimension.perHeight('1%');

const Home = ({navigation}) => {
  const safeDms = useSafeAreaInsets();
  const [inputSearch, setInputSearch] = useState('');
  const [prjName, setPrjName] = useState('');
  const [prjDescript, setPrjDescript] = useState('');
  const [prjNote, setPrjNote] = useState('');
  const [prjCreator, setPrjCreator] = useState('');
  const [prjLocation, setPrjLocation] = useState('');
  const prjData = [
    {
      dateCreate: '16/06/2001',
      projectData: [
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
      ],
    },
    {
      dateCreate: '16/06/2002',
      projectData: [
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
      ],
    },
    {
      dateCreate: '16/06/2003',
      projectData: [
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
      ],
    },
    {
      dateCreate: '16/06/2004',
      projectData: [
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
        {
          projectCreator: 'Cuong',
          projectDescript: 'Test project',
          projectName: 'Test 1',
          projectNote: 'only Test',
          timeCreate: '16:06',
        },
      ],
    },
  ];

  const ProjectRender = ({item, index}) => {
    return (
      <View key={index}>
        <Text>{item.dateCreate}</Text>
        {item.projectData.map((prj, idx) => {
          return (
            <TouchableOpacity key={idx}>
              <Text>{prj.projectName}</Text>
              <Text>{prj.projectCreator}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.DEFAULT_BG}}>
      <StatusBarCustom />
      <View style={[styles.container, {marginTop: safeDms.top}]}>
        <View style={{}}>
          <Text style={styles.headerText1}>GeoPfes 2.0</Text>
        </View>
        <View>
          <Text style={styles.headerText2}>Dự án</Text>
          <SearchUI
            placeHolder={'Tìm kiếm dự án'}
            text={inputSearch}
            setText={setInputSearch}
          />
        </View>
        <View style={styles.containerPrjData}>
          <FlatList
            data={prjData}
            ListEmptyComponent={() => {
              return (
                <EmptyList
                  emptyText={'Chưa tạo mới bất kì dự án nào!'}
                  fontSize={'4.4%'}
                />
              );
            }}
            renderItem={({item, index}) => {
              return <ProjectRender item={item} index={index} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_BG,
    width: '92%',
    alignSelf: 'center',
  },

  headerText1: {
    fontSize: dimension.perWidth('7.7%'),
    fontWeight: '600',
    marginBottom: MARGIN_VER,
    color: colors.DEFAULT_GREEN,
  },

  headerText2: {
    fontSize: dimension.perWidth('6.5%'),
    fontWeight: '500',
    color: colors.INACTIVE_TEXT,
    marginBottom: MARGIN_VER,
  },

  containerPrjData: {
    paddingTop: MARGIN_VER,
  },
});

export default Home;
