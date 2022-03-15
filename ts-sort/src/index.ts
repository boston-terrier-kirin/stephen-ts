import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

{
	const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
	numbersCollection.sort();
	console.log('-----');
	console.log(numbersCollection.data);
}
{
	const charactersCollection = new CharactersCollection('jiezkabx');
	charactersCollection.sort();
	console.log('-----');
	console.log(charactersCollection.data);
}
{
	const linkedList = new LinkedList();
	linkedList.add(10);
	linkedList.add(1);
	linkedList.add(3);
	linkedList.add(2);
	linkedList.sort();
	console.log('-----');
	linkedList.print();
}
