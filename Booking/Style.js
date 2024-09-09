import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  court: {
    backgroundColor: '#4d9773',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  courtContainer: {
    marginTop: 15,
    height: 70,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 5,
  },
  container: {
    flex: 1,
  },
  dateContainer: {
    marginTop: 20,
    backgroundColor: '#85614b',
    height: 70,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  date: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#b89a7c',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
  },
  timeSlot: {
    flex: 1,
    backgroundColor: '#495057',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 4,
  },
  timeText: {
    color: 'white',
  },
  dateDisplayContainer: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dayText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  numberMonthContainer: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 16,
    color: 'white',
    marginRight: 4,
  },
  monthText: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles