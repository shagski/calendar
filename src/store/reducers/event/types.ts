import { IEvent } from "../../../moduls/IEvent";
import { IUser } from "./../../../moduls/IUser";

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventActionType = SetGuestsAction | SetEventsAction;
