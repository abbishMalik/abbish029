import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native";

function BookChapters() {

  const route = useRoute()

  const [chapters, setChapters] = useState([])

  useEffect(() => {

    setChapters(route.params.chapters);

  }, [])

  return (
    <View>
      <FlatList
        data={chapters}
        contentContainerStyle={{
          gap: 10
        }}
        renderItem={({ item, index }) => (
          <Text
            style={{
              padding: 10,
              backgroundColor: '#e2e3e5'
            }}
          >{item}</Text>
        )}
      />
    </View>
  )

}

export default BookChapters