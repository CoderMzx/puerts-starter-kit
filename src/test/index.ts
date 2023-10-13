import { JSEngineBridge, JavaScriptApplication } from 'app';
import { GameTest } from './GameTest';

export class TestApplication extends JavaScriptApplication {

	initialize() {
		GameTest.start();
	}
}

export default function main(lancher: JSEngineBridge) {
	return new TestApplication(lancher);
}
