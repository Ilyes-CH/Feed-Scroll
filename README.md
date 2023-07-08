## Dynamic Image Gallery

This JavaScript code sets up a dynamic image gallery that fetches random photos from the Unsplash API and displays them in a grid layout.

**Disclaimer:** Please be mindful not to abuse the Unsplash API and your API key. The code provided here is for educational purposes, and the API has usage limits. Ensure that you comply with the API usage guidelines and avoid making excessive requests.

### Prerequisites

To use this code, you need to have the following:

- HTML file with the necessary structure (e.g., image container, loader element)
- CSS styling for the image gallery (not included in this code)
- Internet connection to fetch photos from the Unsplash API

### Code Explanation

The JavaScript code performs the following tasks:

1. **Variables and API Endpoint**:
   - `count`: Specifies the number of photos to fetch from the API.
   - `apiKey`: Your Unsplash API access key.
   - `apiUrl`: The endpoint URL to fetch random photos from the Unsplash API, based on the provided `count` and `apiKey`.

2. **Loader Functions**:
   - `showLoader()`: Displays the loader element and hides the image container.
   - `hideLoader()`: Hides the loader element and displays the image container.

3. **Element Creation**:
   - `setAttribute(element, attributes)`: Sets the specified attributes on the given element using the provided key-value pairs.

4. **Display Photos**:
   - `displayPhoto()`: Iterates through the fetched `photosArray` and creates `a` and `img` elements for each photo.
     - Sets the `href` attribute of the `a` element to the photo's link for a full-size view.
     - Sets the `src`, `alt`, and `title` attributes of the `img` element to display the photo and its description.

5. **Fetching Photos**:
   - `getPhotos()`: Sends a request to the Unsplash API using `fetch()` and retrieves random photos.
     - Shows the loader.
     - Parses the response as JSON into the `photosArray`.
     - Calls `displayPhoto()` to render the fetched photos.
     - Hides the loader.

6. **Infinite Scroll**:
   - `window.addEventListener('scroll', ...)`: Listens for the scroll event and triggers the fetching of more photos when nearing the end of the page.

7. **Initialization**:
   - `getPhotos()`: Calls the `getPhotos()` function to fetch and display the initial set of photos.

### Customization

To customize the behavior or appearance of the image gallery, you can modify the following parts of the code:
- `count`: Change the number of photos fetched from the API.
- `apiKey`: Replace it with your own Unsplash API access key.
- CSS styling: Add your custom CSS styles to modify the layout, colors, and other aspects of the image gallery.

Note: The HTML structure and CSS styling are not included in this code. You need to set up the HTML structure and apply CSS styles separately.

**Important:** Ensure that you comply with the API usage guidelines and avoid making excessive requests. Be mindful of the limitations of the Unsplash API.

Enjoy your dynamic image gallery!
