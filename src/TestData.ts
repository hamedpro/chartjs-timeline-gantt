class Event {
  EventName: string;
  EventSource: string;
  Start: Date;
  End: Date;
}

const simulateDate = (value: number) => {
  var t = new Date();
  t.setSeconds(t.getSeconds() + value);
  return t;
};

const testData: Event[] = [
  {
    Start: simulateDate(0),
    End: simulateDate(10),
    EventName: "LOADING",
    EventSource: "Group1"
  },
  {
    Start: simulateDate(10),
    End: simulateDate(16),
    EventName: "PROCESS",
    EventSource: "Group1"
  },
  {
    Start: simulateDate(12),
    End: simulateDate(16),
    EventName: "TIMEOUT",
    EventSource: "Group1"
  },
  {
    Start: simulateDate(16),
    End: simulateDate(28),
    EventName: "UNLOADING",
    EventSource: "Group1"
  },
  {
    Start: simulateDate(0),
    End: simulateDate(20),
    EventName: "AUTO",
    EventSource: "Group2"
  },
  {
    Start: simulateDate(20),
    End: simulateDate(24),
    EventName: "MANUAL",
    EventSource: "Group2"
  },
  {
    Start: simulateDate(22),
    End: simulateDate(28),
    EventName: "AUTO",
    EventSource: "Group2"
  },
  {
    Start: simulateDate(0),
    End: simulateDate(10),
    EventName: "EMS",
    EventSource: "Group3"
  },
  {
    Start: simulateDate(5),
    End: simulateDate(15),
    EventName: "SAFETY",
    EventSource: "Group3"
  },
  {
    Start: simulateDate(9),
    End: simulateDate(20),
    EventName: "OVERRIDE",
    EventSource: "Group3"
  },
  {
    Start: simulateDate(10),
    End: simulateDate(20),
    EventName: "TEST",
    EventSource: "Group3"
  }
];

export default testData;
