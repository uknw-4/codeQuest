// English content — same structure and answer order as fr.js + fr-extra.js
window.CQ=window.CQ||{};CQ.en={
py:{d:'The ideal first language: readable, versatile, used in AI, automation and data.',ls:[
 {n:'Printing text',th:'The print() function displays what you put between the parentheses. Text goes between quotes.',ex:'print("Hello!")\nprint(2 + 3)   # prints 5',q:[
  {p:'Which line prints Hello?',o:['echo "Hello"','print("Hello")','console.log("Hello")','say Hello'],a:1,e:'In Python, you display things with print().'},
  {t:'f',p:'Fill in to print Hi:',c:'___("Hi")',a:['print'],e:'print() is the display function.'},
  {p:'What does this print?',c:'print(2 + 3)',o:['2 + 3','5','23','Error'],a:1,e:'Without quotes, Python computes: 2 + 3 = 5.'}]},
 {n:'Variables',th:'A variable is a labelled box. The = sign stores a value in it.',ex:'name = "Lea"\nage = 25\nprint(name, age)',q:[
  {p:'What does this print?',c:'name = "Lea"\nprint(name)',o:['name','"Lea"','Lea','Error'],a:2,e:'print(name) shows the variable\'s content, without quotes.'},
  {t:'f',p:'Which symbol stores 10 in x?',c:'x ___ 10',a:['='],e:'= assigns a value.'},
  {p:'Which variable name is valid?',o:['2age','my-age','my_age','my age'],a:2,e:'No spaces, no dashes, no leading digit: use _.'}]},
 {n:'Conditions',th:'if tests a condition. The block to run is indented. else handles the other case.',ex:'age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',q:[
  {p:'Which character ends the if line?',o:[';',':','{','.'],a:1,e:'In Python, if ... ends with a colon.'},
  {p:'What does this print?',c:'x = 5\nif x > 3:\n    print("big")\nelse:\n    print("small")',o:['big','small','big small','Nothing'],a:0,e:'5 > 3 is true, so it prints big.'},
  {t:'f',p:'Complete the condition:',c:'___ x == 2:\n    print("two")',a:['if'],e:'if starts a condition. == compares two values.'}]},
 {n:'Loops',th:'for repeats an action for each item. range(3) gives 0, 1, 2.',ex:'for i in range(3):\n    print(i)\n# 0\n# 1\n# 2',q:[
  {p:'What does this print?',c:'for i in range(3):\n    print(i)',o:['1 2 3','0 1 2','0 1 2 3','3'],a:1,e:'range(3) starts at 0 and stops before 3.'},
  {t:'f',p:'Complete the loop:',c:'for i ___ range(5):',a:['in'],e:'for ... in ... walks through a sequence.'},
  {p:'What does a while loop do?',o:['Runs only once','Repeats as long as the condition is true','Defines a function','Prints text'],a:1,e:'while repeats while its condition stays true.'}]},
 {n:'Functions',th:'def creates a reusable function. Parameters go in parentheses, return sends back the result.',ex:'def greet(name):\n    return "Hi " + name\n\nprint(greet("Lea"))',q:[
  {t:'f',p:'Fill in to create a function:',c:'___ double(x):\n    return x * 2',a:['def'],e:'def (for "define") creates a function.'},
  {p:'What does this print?',c:'def f(x):\n    return x + 1\n\nprint(f(2))',o:['2','3','x + 1','f(2)'],a:1,e:'f(2) returns 2 + 1 = 3.'},
  {p:'In def greet(name):, name is…',o:['A parameter','A loop','A module','A comment'],a:0,e:'name receives the value passed in the call.'}]},
 {n:'Lists and dictionaries',th:'A list stores values in order. A dictionary maps keys to values.',ex:'grades = [12, 15, 9]\ngrades.append(18)\nprint(len(grades))  # 4\n\nprofile = {"name": "Lea", "age": 25}\nprint(profile["name"])  # Lea',q:[
  {p:'What is len([1, 2, 3])?',o:['2','3','6','[1, 2, 3]'],a:1,e:'len() counts the items: 3.'},
  {t:'f',p:'Add 4 to the end of the list:',c:'items.___(4)',a:['append'],e:'append() adds an item at the end.'},
  {p:'What does this print?',c:'d = {"name": "Lea"}\nprint(d["name"])',o:['name','Lea','{"name": "Lea"}','Error'],a:1,e:'d["name"] reads the value for the key "name".'}]}]},
js:{d:'The language of the web: it makes pages interactive, and also runs on servers.',ls:[
 {n:'The console',th:'console.log() shows a message in the browser console. It\'s tool #1 for testing.',ex:'console.log("Hi");\nconsole.log(4 * 2); // 8',q:[
  {p:'Which statement prints to the console?',o:['print("Hi")','console.log("Hi")','echo "Hi"','System.out("Hi")'],a:1,e:'console.log() writes to the console.'},
  {t:'f',p:'Fill in:',c:'console.___("Hi");',a:['log'],e:'It\'s console.log.'},
  {p:'What does this print?',c:'console.log("2" + 2);',o:['4','22','"4"','Error'],a:1,e:'With text, + glues the pieces: "2" + 2 gives "22".'}]},
 {n:'Variables',th:'let creates a changeable variable, const a constant that cannot be reassigned.',ex:'let score = 0;\nscore = score + 10;\nconst nickname = "Neo";',q:[
  {p:'Which keyword creates a value that can\'t be reassigned?',o:['let','var','const','fix'],a:2,e:'const prevents reassigning the variable.'},
  {t:'f',p:'Declare a changeable variable:',c:'___ name = "Lea";',a:['let','var'],e:'let (or the older var) creates a changeable variable.'},
  {p:'What does this print?',c:'let a = 3;\na = a * 2;\nconsole.log(a);',o:['3','6','32','a'],a:1,e:'a is 3, then 3 × 2 = 6.'}]},
 {n:'Functions',th:'A function groups reusable instructions. return sends back a result.',ex:'function double(x) {\n  return x * 2;\n}\nconsole.log(double(4)); // 8',q:[
  {p:'Which keyword returns a value?',o:['send','return','give','out'],a:1,e:'return sends back the function\'s result.'},
  {p:'What does this print?',c:'function triple(x) {\n  return x * 3;\n}\nconsole.log(triple(4));',o:['7','12','43','x * 3'],a:1,e:'4 × 3 = 12.'},
  {t:'f',p:'Fill in:',c:'___ square(x) {\n  return x * x;\n}',a:['function'],e:'You declare a function with function.'}]},
 {n:'Arrays',th:'An array stores a list. Slots are counted from 0. push() adds at the end.',ex:'const fruits = ["apple", "kiwi"];\nfruits.push("pear");\nconsole.log(fruits[0]); // apple',q:[
  {p:'What does this print?',c:'const f = ["apple", "kiwi"];\nconsole.log(f[1]);',o:['apple','kiwi','1','undefined'],a:1,e:'Index 1 is the 2nd slot: kiwi.'},
  {p:'What is the index of the first item?',o:['1','0','-1','A'],a:1,e:'Arrays start at 0.'},
  {t:'f',p:'Add "pear" at the end:',c:'fruits.___("pear");',a:['push'],e:'push() adds at the end of the array.'}]},
 {n:'Objects',th:'An object groups name: value properties. You read them with a dot.',ex:'const user = { name: "Lea", age: 25 };\nconsole.log(user.name);        // Lea\nconsole.log(Object.keys(user)); // ["name", "age"]',q:[
  {p:'What does this print?',c:'const user = { name: "Lea", age: 25 };\nconsole.log(user.age);',o:['name','25','"age"','undefined'],a:1,e:'user.age reads the age property.'},
  {t:'f',p:'List the object\'s keys:',c:'Object.___(user)',a:['keys'],e:'Object.keys() returns the list of keys.'},
  {p:'What is user.city if the property doesn\'t exist?',o:['null','undefined','Error','""'],a:1,e:'A missing property is undefined.'}]}]},
html:{d:'The structure of every web page: headings, text, images, links.',ls:[
 {n:'Tags',th:'HTML wraps content in tags: an opening <p> and a closing </p>.',ex:'<h1>My site</h1>\n<p>Welcome!</p>',q:[
  {p:'Which tag gives the most important heading?',o:['<h6>','<title>','<h1>','<big>'],a:2,e:'<h1> is the main heading, <h6> the smallest.'},
  {t:'f',p:'Close the paragraph:',c:'<p>Text</___>',a:['p'],e:'The closing tag repeats the name with a /: </p>.'},
  {p:'What does a closing tag look like?',o:['<p/>','</p>','<p>','<-p>'],a:1,e:'A closing tag starts with </.'}]},
 {n:'Links and images',th:'<a href="..."> creates a link. <img src="..." alt="..."> shows an image.',ex:'<a href="https://example.com">Visit</a>\n<img src="cat.png" alt="A cat">',q:[
  {p:'Which attribute sets a link\'s destination?',o:['src','link','href','to'],a:2,e:'href holds the link address.'},
  {t:'f',p:'Complete the image:',c:'<img ___="cat.png">',a:['src'],e:'src points to the image file.'},
  {p:'What is alt for on an image?',o:['The size','A replacement text','The colour','A link'],a:1,e:'alt describes the image (accessibility, image that fails to load).'}]},
 {n:'Lists',th:'<ul> makes a bulleted list, <ol> a numbered list. Each item is an <li>.',ex:'<ul>\n  <li>Python</li>\n  <li>HTML</li>\n</ul>',q:[
  {p:'Which tag makes a numbered list?',o:['<ul>','<ol>','<li>','<nl>'],a:1,e:'ol = ordered list, numbered.'},
  {t:'f',p:'Complete the item:',c:'<___>Item</li>',a:['li'],e:'Each list item is an <li>.'},
  {p:'What does <ul> do?',o:['A bulleted list','A link','A heading','A table'],a:0,e:'ul = unordered list, with bullets.'}]},
 {n:'Page structure',th:'A page has a <head> (invisible info) and a <body> (visible content).',ex:'<!DOCTYPE html>\n<html>\n  <head><title>Home</title></head>\n  <body><h1>Hi</h1></body>\n</html>',q:[
  {p:'Where does visible content go?',o:['<head>','<body>','<meta>','<title>'],a:1,e:'Everything you see is inside <body>.'},
  {p:'What does <title> control?',o:['The big page heading','The tab text','The font','The footer'],a:1,e:'<title> shows in the browser tab.'},
  {t:'f',p:'Declare the encoding:',c:'<___ charset="utf-8">',a:['meta'],e:'The <meta> tag gives information about the page.'}]}]},
css:{d:'The style of the web: colours, sizes, layout.',ls:[
 {n:'Selectors and colours',th:'A CSS rule = a selector + properties. A class is targeted with a dot.',ex:'p {\n  color: red;\n}\n.card {\n  background: white;\n}',q:[
  {p:'Which property changes text colour?',o:['font-color','color','text-color','background'],a:1,e:'It\'s color.'},
  {t:'f',p:'Make headings blue:',c:'h1 { ___: blue; }',a:['color'],e:'color changes the text colour.'},
  {p:'How do you target the class "card"?',o:['#card','card','.card','*card'],a:2,e:'The dot targets a class.'}]},
 {n:'The box model',th:'padding = inner space, border = the outline, margin = outer space.',ex:'.button {\n  padding: 12px;\n  border: 2px solid black;\n  margin: 8px;\n}',q:[
  {p:'Which property adds space inside?',o:['margin','padding','gap','space'],a:1,e:'padding is the inner space.'},
  {p:'And outside?',o:['margin','padding','border','outline'],a:0,e:'margin pushes the element away from others.'},
  {t:'f',p:'Solid border:',c:'border: 2px ___ black;',a:['solid'],e:'solid = full line (dashed = dashes).'}]},
 {n:'Text',th:'font-size sets size, font-weight boldness, text-align alignment. An id is targeted with #.',ex:'#menu {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n}',q:[
  {p:'How do you centre text?',o:['align: middle','text-align: center','center: true','font-align: center'],a:1,e:'text-align: center.'},
  {t:'f',p:'Bold text:',c:'font-___: bold;',a:['weight'],e:'font-weight sets boldness.'},
  {p:'How do you target the id "menu"?',o:['.menu','#menu','@menu','menu'],a:1,e:'# targets an id.'}]},
 {n:'Flexbox',th:'display: flex lines children up in a row. justify-content spreads them, gap spaces them.',ex:'.bar {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}',q:[
  {p:'How do you turn on flexbox?',o:['flex: on','display: flex','position: flex','layout: flex'],a:1,e:'display: flex.'},
  {p:'What does justify-content: center do?',o:['Centres along the main axis','Makes it bold','Enlarges items','Hides items'],a:0,e:'It centres items along the main axis (horizontal by default).'},
  {t:'f',p:'16px of space between items:',c:'___: 16px;',a:['gap'],e:'gap spaces items in a flex or grid container.'}]}]},
sql:{d:'The language of databases: search, sort and add data.',ls:[
 {n:'SELECT',th:'SELECT picks the columns, FROM the table. * means all columns.',ex:'SELECT name FROM customers;\nSELECT * FROM customers;',q:[
  {p:'How do you get every column?',o:['SELECT ALL','SELECT *','GET *','SELECT EVERY'],a:1,e:'* means all columns.'},
  {t:'f',p:'Fill in:',c:'SELECT name ___ customers;',a:['from'],e:'FROM names the table.'},
  {p:'SQL is used to…',o:['Build websites','Query databases','Draw','Make music'],a:1,e:'SQL works with databases.'}]},
 {n:'Filtering with WHERE',th:'WHERE keeps only the rows matching a condition. Text values go in single quotes.',ex:'SELECT * FROM customers\nWHERE city = \'Paris\';',q:[
  {p:'Which query returns customers from Paris?',o:['SELECT * FROM customers IF city = \'Paris\'','SELECT * FROM customers WHERE city = \'Paris\'','SELECT Paris FROM customers','FIND customers Paris'],a:1,e:'WHERE filters rows.'},
  {t:'f',p:'Customers older than 18:',c:'SELECT * FROM customers ___ age > 18;',a:['where'],e:'WHERE sets the condition.'},
  {p:'How do you write text in SQL?',o:['Paris','\'Paris\'','(Paris)','[Paris]'],a:1,e:'Text goes in single quotes.'}]},
 {n:'Sorting and limiting',th:'ORDER BY sorts (ASC ascending, DESC descending). LIMIT keeps the first N rows.',ex:'SELECT name, price FROM products\nORDER BY price DESC\nLIMIT 5;',q:[
  {p:'Which word sorts from largest to smallest?',o:['ASC','DESC','DOWN','REV'],a:1,e:'DESC = descending.'},
  {t:'f',p:'Sort by price:',c:'SELECT * FROM products ___ BY price;',a:['order'],e:'ORDER BY sorts the results.'},
  {p:'What does LIMIT 5 do?',o:['Keeps 5 rows','Deletes 5 rows','Sorts 5 times','Adds 5 rows'],a:0,e:'LIMIT keeps the first 5 rows.'}]},
 {n:'Adding and counting',th:'INSERT INTO adds a row, UPDATE changes one, COUNT(*) counts rows.',ex:'INSERT INTO customers (name) VALUES (\'Lea\');\nSELECT COUNT(*) FROM customers;',q:[
  {t:'f',p:'Add a row:',c:'INSERT ___ customers (name) VALUES (\'Lea\');',a:['into'],e:'INSERT INTO adds data.'},
  {p:'How do you count rows?',o:['SUM(*)','COUNT(*)','TOTAL()','NUMBER(*)'],a:1,e:'COUNT(*) counts the rows.'},
  {p:'Which word changes an existing row?',o:['CHANGE','UPDATE','EDIT','SET'],a:1,e:'UPDATE ... SET ... changes data.'}]}]},
ts:{d:'JavaScript with types: it catches mistakes before your code runs.',ls:[
 {n:'Types',th:'You write the type after a colon: number, string, boolean.',ex:'let age: number = 25;\nlet nickname: string = "Neo";\nlet active: boolean = true;',q:[
  {p:'Which type is for text?',o:['text','string','char','word'],a:1,e:'string = text.'},
  {t:'f',p:'Fill in:',c:'let ok: ___ = true;',a:['boolean'],e:'true/false are booleans.'},
  {p:'TypeScript is…',o:['A language unrelated to JS','JavaScript with types','A CSS framework','A database'],a:1,e:'TS adds types to JS and compiles to JS.'}]},
 {n:'Typed functions',th:'You type the parameters and the function\'s result.',ex:'function add(a: number, b: number): number {\n  return a + b;\n}',q:[
  {p:'What does ": number" after the parentheses mean?',o:['The result type','The function name','A comment','The number of parameters'],a:0,e:'It\'s the return type.'},
  {p:'What happens with add("2", 3)?',o:['It prints 5','TypeScript reports an error','It prints 23','Nothing'],a:1,e:'"2" is not a number: TS reports the error.'},
  {t:'f',p:'Text parameter:',c:'function hi(n: ___) {}',a:['string'],e:'Text is a string.'}]},
 {n:'Interfaces',th:'An interface describes the shape of an object. ? makes a property optional.',ex:'interface User {\n  name: string;\n  age?: number;\n}',q:[
  {p:'What does age?: number mean?',o:['age is required','age is optional','age is text','age is hidden'],a:1,e:'? = optional property.'},
  {t:'f',p:'Fill in:',c:'___ User {\n  name: string;\n}',a:['interface'],e:'interface describes an object.'},
  {p:'Type of an array of numbers?',o:['number[]','[number]','array','numbers'],a:0,e:'number[] = array of numbers.'}]}]},
java:{d:'Robust and everywhere: enterprise apps, Android, Minecraft.',ls:[
 {n:'Hello World',th:'In Java, everything lives in a class. Every statement ends with a semicolon.',ex:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hi");\n  }\n}',q:[
  {t:'f',p:'Fill in:',c:'System.out.___("Hi");',a:['println'],e:'println prints then moves to a new line.'},
  {p:'What ends a statement?',o:[':','.',';',','],a:2,e:'The semicolon ends every statement.'},
  {p:'Where does Java code live?',o:['In a class','In a CSS file','In a tag','Nowhere'],a:0,e:'All code is inside a class.'}]},
 {n:'Variables',th:'Java is typed: int for whole numbers, double for decimals, String for text.',ex:'int age = 25;\ndouble price = 9.99;\nString name = "Lea";',q:[
  {p:'Which type is for whole numbers?',o:['int','double','String','num'],a:0,e:'int = integer.'},
  {t:'f',p:'Fill in:',c:'___ name = "Lea";',a:['string'],e:'String (capital S) for text.'},
  {p:'double stores…',o:['Text','A decimal number','True/false','Two values'],a:1,e:'double = decimal number.'}]},
 {n:'Conditions and loops',th:'if tests, for repeats. i++ adds 1 to i.',ex:'for (int i = 0; i < 3; i++) {\n  System.out.println(i);\n}',q:[
  {p:'What does the loop above print?',o:['1 2 3','0 1 2','0 1 2 3','3'],a:1,e:'i goes from 0 to 2 (stops before 3).'},
  {p:'What does i++ do?',o:['Adds 1 to i','Doubles i','Resets i to 0','Prints i'],a:0,e:'i++ increments by 1.'},
  {t:'f',p:'Test equality:',c:'if (x ___ 5) { }',a:['=='],e:'== compares, = assigns.'}]}]},
c:{d:'The great ancestor: close to the machine, the foundation of operating systems.',ls:[
 {n:'printf',th:'A C program starts in main(). printf prints text, \\n moves to a new line.',ex:'#include <stdio.h>\n\nint main() {\n  printf("Hi\\n");\n  return 0;\n}',q:[
  {t:'f',p:'Fill in:',c:'___("Hi\\n");',a:['printf'],e:'printf prints text.'},
  {p:'What does \\n do?',o:['A line break','A space','A tab','Nothing'],a:0,e:'\\n = new line.'},
  {p:'Where does a C program start?',o:['start()','main()','begin()','init()'],a:1,e:'Execution begins in main().'}]},
 {n:'Variables and formats',th:'%d prints an integer, %f a decimal, %c a character.',ex:'int n = 5;\nfloat p = 2.5;\nprintf("%d and %f", n, p);',q:[
  {p:'What does %d stand for?',o:['A decimal','An integer','A string','A date'],a:1,e:'%d = integer.'},
  {t:'f',p:'Print a float:',c:'printf("___", p);',a:['%f'],e:'%f for decimal numbers.'},
  {p:'A char holds…',o:['One character','A sentence','An array','A decimal number'],a:0,e:'char = a single character.'}]},
 {n:'Pointers',th:'A pointer stores a memory address. & gives the address, * reads the value it points to.',ex:'int n = 5;\nint *p = &n;\nprintf("%d", *p); // 5',q:[
  {p:'What does &n give?',o:['The value of n','The address of n','n × 2','An error'],a:1,e:'& returns the memory address.'},
  {p:'What does *p give?',o:['The address of p','The value pointed to','Nothing','A multiple of p'],a:1,e:'* dereferences the pointer.'},
  {t:'f',p:'Declare a pointer:',c:'int ___p = &n;',a:['*'],e:'The star declares a pointer.'}]}]},
cpp:{d:'C with superpowers: video games, 3D engines, fast software.',ls:[
 {n:'cout',th:'std::cout sends text to the screen with <<. You need to include <iostream>.',ex:'#include <iostream>\n\nint main() {\n  std::cout << "Hi" << std::endl;\n}',q:[
  {t:'f',p:'Fill in:',c:'std::___ << "Hi";',a:['cout'],e:'cout = console output.'},
  {p:'What does << do here?',o:['Compares','Sends to the output','Only shifts bits','Comments'],a:1,e:'With cout, << sends data to the screen.'},
  {p:'Which file do you include for cout?',o:['<stdio.h>','<iostream>','<string>','<math>'],a:1,e:'<iostream> provides cout.'}]},
 {n:'Variables',th:'std::string for text, bool for true/false, auto lets the compiler guess the type.',ex:'std::string name = "Lea";\nbool active = true;\nauto x = 42; // int',q:[
  {p:'What does auto do?',o:['The type is deduced','Creates a car','Makes the variable constant','Nothing'],a:0,e:'auto deduces the type automatically.'},
  {t:'f',p:'Fill in:',c:'std::___ name = "Lea";',a:['string'],e:'std::string for text.'},
  {p:'Possible values of a bool?',o:['0 to 9','true / false','yes / no','"a" to "z"'],a:1,e:'bool = true or false.'}]},
 {n:'Vector',th:'std::vector is an array that can grow. push_back adds, size() gives the length.',ex:'std::vector<int> v = {1, 2, 3};\nv.push_back(4);\nstd::cout << v.size(); // 4',q:[
  {p:'What is v.size() after push_back(4)?',o:['3','4','5','1'],a:1,e:'3 items + 1 = 4.'},
  {t:'f',p:'Add 4:',c:'v.___(4);',a:['push_back'],e:'push_back adds at the end.'},
  {p:'A vector is…',o:['An array that grows','An arrow','A function','A file'],a:0,e:'A dynamic array.'}]}]},
cs:{d:'The language of Unity and Microsoft: games, Windows apps, web.',ls:[
 {n:'Printing',th:'Console.WriteLine prints a line. $"..." lets you insert variables.',ex:'string name = "Lea";\nConsole.WriteLine($"Hi {name}");',q:[
  {t:'f',p:'Fill in:',c:'Console.___("Hi");',a:['writeline'],e:'Console.WriteLine prints a line.'},
  {p:'Which game engine uses C#?',o:['Unity','Unreal (Blueprints)','Godot only','None'],a:0,e:'Unity is scripted in C#.'},
  {p:'What does $"Hi {name}" do?',o:['Inserts the variable name','Prints dollars','Causes an error','Computes'],a:0,e:'It\'s string interpolation.'}]},
 {n:'Variables',th:'var lets C# guess the type. Careful: integer / integer gives an integer.',ex:'var x = 5;      // int\nint a = 7 / 2;  // 3\nstring s = "a" + "b";',q:[
  {t:'f',p:'Inferred type:',c:'___ x = 5;',a:['var'],e:'var infers the type.'},
  {p:'What is 7 / 2 between two ints?',o:['3.5','3','4','Error'],a:1,e:'Integer division: the decimal part is dropped.'},
  {p:'How do you join two strings?',o:['&','+','.','::'],a:1,e:'+ concatenates strings in C#.'}]},
 {n:'Classes',th:'A class is a blueprint. new creates an object from that blueprint.',ex:'class Dog {\n  public string Name;\n  public void Bark() { Console.WriteLine("Woof"); }\n}\nDog d = new Dog();',q:[
  {t:'f',p:'Create an object:',c:'Dog d = ___ Dog();',a:['new'],e:'new creates an instance.'},
  {p:'public means…',o:['Accessible from outside','Hidden','Constant','Paid'],a:0,e:'public = accessible outside the class.'},
  {p:'A class is…',o:['A blueprint for creating objects','A variable','A loop','An image file'],a:0,e:'It\'s the objects\' blueprint.'}]}]},
php:{d:'It powers a big part of the web on the server side (WordPress…).',ls:[
 {n:'echo',th:'PHP code sits between <?php and ?>. echo prints text. Variables start with $.',ex:'<?php\n$name = "Lea";\necho "Hi";\n?>',q:[
  {t:'f',p:'Fill in:',c:'___ "Hi";',a:['echo'],e:'echo prints text.'},
  {p:'What does a variable start with?',o:['@','$','#','&'],a:1,e:'Every PHP variable starts with $.'},
  {p:'Where does PHP run?',o:['On the server','On the graphics card','In CSS','On the mouse'],a:0,e:'PHP runs server-side.'}]},
 {n:'Concatenation',th:'In PHP, the dot joins two strings.',ex:'$a = "Sun";\necho $a . "day"; // Sunday',q:[
  {p:'Which operator joins two strings?',o:['+','.','&','~'],a:1,e:'The dot concatenates in PHP.'},
  {p:'What does this print?',c:'$a = "Sun";\necho $a . "day";',o:['Sun day','Sunday','$aday','Error'],a:1,e:'"Sun" . "day" = "Sunday".'},
  {t:'f',p:'Fill in:',c:'___age = 25;',a:['$'],e:'Variable = $ + name.'}]},
 {n:'Arrays',th:'foreach walks through an array. count() gives its size. => maps a key to a value.',ex:'$fruits = ["apple", "kiwi"];\nforeach ($fruits as $f) {\n  echo $f;\n}',q:[
  {t:'f',p:'Fill in:',c:'foreach ($fruits ___ $f) { }',a:['as'],e:'foreach (... as ...).'},
  {p:'count(["apple", "kiwi"]) is…',o:['1','2','3','0'],a:1,e:'Two items.'},
  {p:'In ["name" => "Lea"], "name" is…',o:['The key','The value','A function','A comment'],a:0,e:'key => value.'}]}]},
go:{d:'Simple and fast, created by Google for servers and the cloud.',ls:[
 {n:'First program',th:'func declares a function. fmt.Println prints a line.',ex:'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hi")\n}',q:[
  {t:'f',p:'Fill in:',c:'fmt.___("Hi")',a:['println'],e:'fmt.Println prints a line.'},
  {p:'Which keyword declares a function?',o:['function','def','func','fn'],a:2,e:'In Go: func.'},
  {p:'Who created Go?',o:['Apple','Google','Microsoft','Meta'],a:1,e:'Go comes from Google.'}]},
 {n:'Variables',th:':= declares and fills a variable in one go. var lets you state the type.',ex:'x := 5\nvar name string = "Lea"\nx += 2',q:[
  {p:'What does := do?',o:['Compares','Declares and assigns','Comments','Divides'],a:1,e:':= declares and assigns at once.'},
  {t:'f',p:'Fill in:',c:'___ age int = 25',a:['var'],e:'var declares a variable.'},
  {p:'What does this print?',c:'a := 10\na += 5\nfmt.Println(a)',o:['10','5','15','105'],a:2,e:'10 + 5 = 15.'}]},
 {n:'Loops',th:'Go has only one loop: for. It does everything.',ex:'for i := 0; i < 3; i++ {\n  fmt.Println(i)\n}',q:[
  {p:'How many loop keywords does Go have?',o:['Just one: for','for and while','for, while, do','None'],a:0,e:'Only for.'},
  {p:'What does the loop above print?',o:['0 1 2','1 2 3','0 1 2 3','3'],a:0,e:'From 0 to 2.'},
  {t:'f',p:'Fill in:',c:'___ i := 0; i < 5; i++ { }',a:['for'],e:'for is Go\'s loop.'}]}]},
rs:{d:'As fast as C, but safe: it prevents many memory bugs.',ls:[
 {n:'println!',th:'fn declares a function. println! is a macro (the ! tells you so).',ex:'fn main() {\n    println!("Hi");\n}',q:[
  {t:'f',p:'Fill in:',c:'println___("Hi");',a:['!'],e:'println! is a macro.'},
  {p:'Which keyword declares a function?',o:['func','fn','def','function'],a:1,e:'In Rust: fn.'},
  {p:'What does the ! in println! signal?',o:['A macro','An error','A comment','A negation'],a:0,e:'The ! marks a macro.'}]},
 {n:'Mutability',th:'By default, a variable can\'t change. mut makes it changeable.',ex:'let x = 5;\nlet mut score = 0;\nscore += 10;',q:[
  {t:'f',p:'Changeable variable:',c:'let ___ score = 0;',a:['mut'],e:'mut = mutable.'},
  {p:'What happens with let x = 5; then x = 6;?',o:['x is 6','Compile error','x is 11','x is 5 and 6'],a:1,e:'x isn\'t mut: Rust refuses.'},
  {p:'By default, Rust variables are…',o:['Changeable','Immutable','Global','Hidden'],a:1,e:'Immutable by default.'}]},
 {n:'match',th:'match compares a value against several cases. _ catches every other case.',ex:'match n {\n    1 => println!("one"),\n    _ => println!("other"),\n}',q:[
  {p:'What does _ mean in a match?',o:['Every other case','Zero','An error','Nothing'],a:0,e:'_ = default case.'},
  {t:'f',p:'Fill in:',c:'___ n {\n    1 => println!("one"),\n    _ => println!("other"),\n}',a:['match'],e:'match tests several cases.'},
  {p:'Rust is known for…',o:['Memory safety without a garbage collector','Being slow','Static web pages','Design'],a:0,e:'Its ownership system guarantees memory safety.'}]}]},
rb:{d:'A language designed to be a joy to write (Ruby on Rails).',ls:[
 {n:'puts',th:'puts prints a line. No semicolon needed. # starts a comment.',ex:'puts "Hi"\n# this is a comment',q:[
  {t:'f',p:'Fill in:',c:'___ "Hi"',a:['puts'],e:'puts prints a line.'},
  {p:'Do you need a ; at the end of a line?',o:['Yes, always','No','Only on Mondays','Only after puts'],a:1,e:'Ruby doesn\'t need it.'},
  {p:'What starts a comment?',o:['//','#','--','/*'],a:1,e:'# in Ruby.'}]},
 {n:'Variables',th:'#{...} inserts a variable into a string. 3.times repeats 3 times.',ex:'name = "Lea"\nputs "Hi #{name}"\n3.times { print "a" }',q:[
  {t:'f',p:'Fill in:',c:'puts "Hi ___{name}"',a:['#'],e:'#{...} inserts a value.'},
  {p:'What does this print?',c:'3.times { print "a" }',o:['a','aaa','3a','a a a'],a:1,e:'print 3 times with no line break: aaa.'},
  {p:'What does puts "Hi #{name}" print if name = "Lea"?',o:['Hi #{name}','Hi Lea','Hi name','Error'],a:1,e:'The variable is replaced by its value.'}]},
 {n:'Methods',th:'def creates a method, end closes the block. The last value is returned.',ex:'def square(x)\n  x * x\nend\nputs square(3) # 9',q:[
  {t:'f',p:'Fill in:',c:'___ square(x)\n  x * x\nend',a:['def'],e:'def defines a method.'},
  {p:'Which word closes a block?',o:['}','end','stop','done'],a:1,e:'end closes the block.'},
  {p:'What is square(3)?',o:['6','9','33','3'],a:1,e:'3 × 3 = 9.'}]}]},
sw:{d:'Apple\'s language for iPhone, iPad and Mac apps.',ls:[
 {n:'let and var',th:'let creates a constant, var a changeable variable. print displays.',ex:'let name = "Lea"\nvar score = 0\nscore += 10\nprint(score)',q:[
  {p:'Which keyword creates a constant?',o:['var','let','const','fix'],a:1,e:'let = constant in Swift.'},
  {t:'f',p:'Changeable variable:',c:'___ score = 0',a:['var'],e:'var = changeable.'},
  {p:'Swift is mostly used for…',o:['Apple apps','Databases','Styling pages','Linux scripts'],a:0,e:'iOS, macOS, watchOS…'}]},
 {n:'Optionals',th:'A type with ? may be nil (nothing). if let unwraps it safely.',ex:'var age: Int? = nil\nif let a = age {\n  print(a)\n}',q:[
  {p:'What does String? mean?',o:['May be nil','Is a number','Is required','Is a question'],a:0,e:'? = optional, may be empty.'},
  {p:'What is if let for?',o:['Safely unwrapping an optional','Making a loop','Declaring a class','Printing'],a:0,e:'if let only runs if the value exists.'},
  {t:'f',p:'Fill in:',c:'var age: Int___ = nil',a:['?'],e:'Int? can be nil.'}]},
 {n:'Functions',th:'func declares a function. -> gives the return type. You name parameters when calling.',ex:'func greet(name: String) -> String {\n  return "Hi \\(name)"\n}\ngreet(name: "Lea")',q:[
  {t:'f',p:'Fill in:',c:'___ greet(name: String) { }',a:['func'],e:'func declares a function.'},
  {p:'What does -> String mean?',o:['The return type','A decorative arrow','A parameter','An error'],a:0,e:'The function returns a String.'},
  {p:'How do you call it?',o:['greet("Lea")','greet(name: "Lea")','greet name','call greet'],a:1,e:'You write the parameter name.'}]}]},
kt:{d:'The modern language recommended for Android.',ls:[
 {n:'val and var',th:'fun declares a function. val = can\'t change, var = changeable.',ex:'fun main() {\n  val name = "Lea"\n  var score = 0\n  println(name)\n}',q:[
  {p:'val means…',o:['Can\'t be reassigned','Changeable','Random value','Validated'],a:0,e:'val can\'t be reassigned.'},
  {t:'f',p:'Fill in:',c:'___ main() { }',a:['fun'],e:'fun declares a function.'},
  {p:'Kotlin is widely used for…',o:['Android','Printers','CSS','Excel'],a:0,e:'Google recommends it for Android.'}]},
 {n:'Strings and null',th:'"$n" inserts a variable. String? may be null, and ?. calls safely without crashing.',ex:'val n = 3\nprintln("n = $n")\nval s: String? = null\nprintln(s?.length)',q:[
  {p:'What does this print?',c:'val n = 3\nprintln("n = $n")',o:['n = $n','n = 3','3','Error'],a:1,e:'$n is replaced by 3.'},
  {t:'f',p:'May be null:',c:'val x: String___ = null',a:['?'],e:'String? accepts null.'},
  {p:'What does ?. do?',o:['Safe call if null','Compares','Divides','Comments'],a:0,e:'If it\'s null, it returns null instead of crashing.'}]},
 {n:'when and lists',th:'when replaces a chain of ifs. listOf creates a list.',ex:'val text = when (x) {\n  1 -> "one"\n  else -> "other"\n}\nval l = listOf(1, 2, 3)',q:[
  {t:'f',p:'Fill in:',c:'___ (x) {\n  1 -> "one"\n  else -> "other"\n}',a:['when'],e:'when tests several cases.'},
  {p:'listOf(1, 2, 3).size is…',o:['2','3','6','1'],a:1,e:'Three items.'},
  {p:'The else of a when is…',o:['The default case','An error','The first case','Required first'],a:0,e:'else catches everything else.'}]}]},
sh:{d:'The terminal: drive your computer and automate tasks.',ls:[
 {n:'Basic commands',th:'echo prints, ls lists files, cd changes folder.',ex:'echo "Hi"\nls\ncd Documents',q:[
  {t:'f',p:'Fill in:',c:'___ "Hi"',a:['echo'],e:'echo prints text.'},
  {p:'Which command lists files?',o:['ls','cd','rm','list'],a:0,e:'ls = list.'},
  {p:'Which command changes folder?',o:['mv','cd','go','dir'],a:1,e:'cd = change directory.'}]},
 {n:'Variables',th:'No spaces around =. You read a variable with $. mkdir creates a folder.',ex:'name="Lea"\necho "Hi $name"\nmkdir projects',q:[
  {p:'Which form is correct?',o:['name = "Lea"','name="Lea"','$name = "Lea"','set name "Lea"'],a:1,e:'No spaces around = in Bash.'},
  {t:'f',p:'Read the variable:',c:'echo "___name"',a:['$'],e:'$name reads the variable.'},
  {p:'What does mkdir do?',o:['Creates a folder','Deletes a file','Copies','Prints'],a:0,e:'mkdir = make directory.'}]},
 {n:'Scripts',th:'A script starts with #!/bin/bash. chmod +x makes it executable.',ex:'#!/bin/bash\nfor i in 1 2 3; do\n  echo $i\ndone',q:[
  {t:'f',p:'Fill in:',c:'for f in *.txt; ___ echo $f; done',a:['do'],e:'for ... ; do ... ; done'},
  {p:'What is #!/bin/bash for?',o:['Naming the interpreter','Commenting everything','Deleting the file','Nothing'],a:0,e:'The "shebang" says which program runs the script.'},
  {p:'How do you make a script executable?',o:['chmod +x script.sh','run script.sh','exec +','sudo fast'],a:0,e:'chmod +x grants execute permission.'}]}]},
algo:{d:'How programmers think: logic, efficiency, searching, recursion, and the maths you actually need (no headaches).',ls:[
 {n:'Boolean logic',th:'A condition is true or false. and: both must be true. or: at least one. not: flips it.',ex:'age = 20\nhas_ticket = True\nprint(age >= 18 and has_ticket)  # True\nprint(not True)                   # False',q:[
  {p:'What is True and False?',o:['True','False','Error','None'],a:1,e:'and needs both to be true.'},
  {p:'What is True or False?',o:['True','False','Error','None'],a:0,e:'or: one true is enough.'},
  {t:'f',p:'Flip the condition:',c:'___ True   # gives False',a:['not'],e:'not flips a boolean.'}]},
 {n:'Modulo',th:'% gives the remainder of a division. It\'s the #1 tool to check if a number is even, or to make cycles.',ex:'print(7 % 3)   # 1  (7 = 3×2 + 1)\nprint(10 % 2)  # 0  → 10 is even',q:[
  {p:'What is 7 % 3?',o:['2','1','0','2.33'],a:1,e:'7 = 3 × 2 + 1, the remainder is 1.'},
  {p:'How do you test if n is even?',o:['n / 2 == 0','n % 2 == 0','n % 2 == 1','n * 2 == 0'],a:1,e:'An even number leaves a remainder of 0 when divided by 2.'},
  {t:'f',p:'Which operator gives the remainder?',c:'rest = 17 ___ 5',a:['%'],e:'% is the modulo operator (17 % 5 = 2).'}]},
 {n:'Efficiency (Big O)',th:'Big O measures how time grows with data size. O(1): constant. O(n): proportional. O(n²): blows up fast.',ex:'items[0]            # O(1)  direct access\nfor x in items:     # O(n)  one pass\n    for y in items: # O(n²) loop inside a loop\n        ...',q:[
  {p:'Walking through a list once is…',o:['O(1)','O(n)','O(n²)','O(log n)'],a:1,e:'Time grows with the number of items n.'},
  {p:'A loop inside a loop over the same list is…',o:['O(n)','O(1)','O(n²)','O(2)'],a:2,e:'n passes × n passes = n².'},
  {p:'Reading items[5] is…',o:['O(1)','O(n)','O(n²)','Impossible'],a:0,e:'Index access is instant, whatever the size.'}]},
 {n:'Binary search',th:'In a sorted list, look at the middle and throw away the useless half at every step. Very fast: O(log n).',ex:'# Finding 42 among 1,000 sorted numbers:\n# 1000 → 500 → 250 → 125 → … ≈ 10 steps',q:[
  {t:'f',p:'Binary search needs a list that is…',c:'a ___ list (one word)',a:['sorted','ordered'],e:'Without order, you can\'t know which half to drop.'},
  {p:'About how many steps for 1,000 items?',o:['1,000','500','10','1'],a:2,e:'You halve each time: 2¹⁰ ≈ 1,000.'},
  {p:'At each step you look at…',o:['The first item','The last one','The middle item','A random item'],a:2,e:'The middle tells you which half to continue in.'}]},
 {n:'Recursion',th:'A recursive function calls itself on a smaller problem. It needs a base case to stop.',ex:'def fact(n):\n    if n == 1:          # base case\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(3))  # 3 × 2 × 1 = 6',q:[
  {p:'What is fact(3)?',o:['3','6','9','1'],a:1,e:'3 × 2 × 1 = 6.'},
  {p:'What prevents infinite recursion?',o:['The base case','The print','A global variable','Nothing'],a:0,e:'The base case stops the calls.'},
  {p:'A recursive function…',o:['Calls itself','Returns nothing','Must use a for loop','Is always slow'],a:0,e:'That\'s the definition of recursion.'}]}]}
};
