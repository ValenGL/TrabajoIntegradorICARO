export interface ReceivedMesagges {
  sender: string;
  messagge: string;
  date: Date;
  messaggeId: number;
}

export interface SendedMessagges {
  address: string;
  messagge: string;
  date: Date;
  messaggeId: number;
}

export interface NewMessage {
  sender: string;
  address: string;
  messagge: string;
}
