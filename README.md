# 08082024Assignment
3. Write down some use cases for all life-cycle hooks.
  - `ngOnChanges`: respond to changes in `@Input` properties from a parent component, for instance, display value change when an @Input property changes.
  - `ngOnInit`: initialize data or fetch data from a database when the component is created, for instance, fetching user data from an API and assigning it to a component property.
  - `ngDoCheck`: implement custom change detection logic besides Angular’s default change detection, for instance, tracking changes in complex objects or arrays.
  - `ngAfterContentInit`: perform actions after content has been projected into the component, for instance, validating content projected from a parent component.
  - `ngAfterContentChecked`: respond after Angular checks the content projection for changes, for instance, adjusting layout or styles after projected content changes.
  - `ngAfterViewInit`: perform actions after the component’s view and its child views have been initialized, for instance, initializing a third-party library that requires access to the DOM elements.
  - `ngAfterViewChecked`: respond after Angular checks the component’s views for changes, for instance, triggering a re-render or updating the UI after a data-bound property changes.
  - `ngOnDestroy`: clean up resources or unsubscribe from observables when the component is destroyed, for instance, clearing intervals.

4. What is the difference between ViewChild vs ViewChildren?
- `@ViewChild` is used when we need to obtain a reference to a single child component within the same view. While `@ViewChildren` is used when we need to query and access multiple child components within the view.

5. What is the difference between ContentChild vs ContentChildren?
- `ContentChild` is used to get a reference to a single element that has been projected from the parent component into the child component’s `ng-content`. On the other hand, `ContentChildren` is used to query and obtain a collection of elements that have been projected from the parent component into the child component’s `ng-content`.

6. What is dependency injection design pattern? What are the benefits?
- Dependency injection design pattern is a design pattern that used to implement Inversion of Control in software development, instead of a class creating its own dependencies, DI allows those dependencies to be injected from the outside by a framework or container. The benefits of using Dependency Injection are loose coupling, which means that classes are less dependent on the specific implementations of their dependencies; enhance testability by allowing dependencies to be easily mocked during unit testing; improves code reusability by allowing different parts of an application to share common dependencies without recreating them.
