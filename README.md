 <h1>Cortica Assignment</h1>
   <p>This is a simple shopping cart application built with React and Node.js, demonstrating the basics of fetching, displaying, and removing items from a cart.</p>
    
   <h2>Table of Contents</h2>
    <ul>
      <li><a href="#features">Features</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#api-endpoints">API Endpoints</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
    </ul>
    
  <img src="./front-end/src/images/Screenshot (5).png">
  <img src="./front-end/src/images/Screenshot (6).png">
   <img src="./front-end//src//images//Screenshot (8).png">
  <h2>Features</h2>
    <ul>
      <li>Display a list of food items.</li>
      <li>Add food items to the cart.</li>
      <li>View items in the cart.</li>
      <li>Remove items from the cart.</li>
      <li>Calculate the total price of items in the cart.</li>
    </ul>
    
   <h2 id="installation">Installation</h2>
    <h3>Prerequisites</h3>
    <p>Ensure you have the following installed:</p>
    <ul>
      <li>Node.js</li>
      <li>npm or yarn</li>
      <li>MongoDB</li>
    </ul>
    
   <h3>Backend Setup</h3>
    <ol>
      <li>Clone the repository:
        <pre><code>git clone https://github.com/vivekverma4669/cortica.git
cd back-end</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Create a <code>.env</code> file in the <code>backend</code> directory and add your MongoDB connection string and port:
        <pre><code>URL=your mongol db connection string
PORT=7000</code></pre>
      </li>
      <li>Start the backend server:
        <pre><code>node index.js</code></pre>
      </li>
    </ol>
    
  <h3>Frontend Setup</h3>
    <ol>
      <li>Navigate to the <code>frontend</code> directory:
        <pre><code>cd front-end</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Start the frontend development server:
        <pre><code>npm run start</code></pre>
      </li>
      <li>Open your browser and navigate to <code>http://localhost:3000</code>.</li>
    </ol>
    
  <h2>Usage</h2>
    <ul>
      <li>Navigate to the home page to view available food items.</li>
      <li>Click on "Add to Cart" to add items to your cart.</li>
      <li>Navigate to the cart page to view your selected items.</li>
      <li>Click on "Remove" to remove items from your cart.</li>
      <li>The total price of items in your cart is displayed at the bottom of the cart page.</li>
    </ul>
    
  <h2>API Endpoints</h2>
    <h3>GET /foods</h3>
    <p>Fetches all food items.</p>
    
  <h3>POST /cart</h3>
    <p>Adds an item to the cart.</p>
    <p>Request body:</p>
    <pre><code>{
  "itemId": "food_item_id",
  "quantity": 1
}</code></pre>
    
   <h3>GET /cart</h3>
    <p>Fetches all items in the cart.</p>
    
  <h3>DELETE /cart/:id</h3>
    <p>Removes an item from the cart.</p>
    
  
   
  </div>
</body>
</html>
